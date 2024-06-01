### 前言

在当今快速发展的技术时代，应用程序的网络通信能力是构建高效、动态用户体验的关键因素之一。特别是在开发 HarmonyOS 应用时，如何高效地与后端服务器交互，管理日志记录，以及确保代码的可维护性和扩展性，成为了开发者面临的重要课题。本文旨在提供一个实践指南，帮助开发者在 HarmonyOS 平台上轻松实现这一目标，通过整合`axios`——这一广受信赖的 HTTP 客户端库，以及引入`@abner/log`来强化日志管理系统，从而构建稳定、高效的网络请求模块。

### 一、插件的安装

进入编辑器终端，安装`axios`和`log`插件。

```bash
ohpm install @ohos/axios @abner/log
```

### 二、配置 log

在 src/main/ets/entryability 目录的`EntryAbility.ets`文件中进行初始化配置

```ts
import { Log } from "@abner/log";

Log.init({
  tag: "HarmonyOSLog", // 打印的标签
  domain: 0x0000, // 业务领域
  close: false, // 是否关闭打印
  isHilog: true, // 打印类型
  showLogLocation: true, // 是否展示点击的位置
  logSize: 800, // 日志每次输出大小
});
```

### 三、创建 axios 实例

src/main/ets 目录下新建`utils`文件夹，并新建`Request.ets`文件。

调用 axios 的 create 方法创建实例，配置请求的基地址，响应时间，请求头等。

```ts
import axios from "@ohos/axios";

export const axiosInstance = axios.create({
  baseURL: "https://xxxxxx.xxx", // 基地址
  timeout: 5000, // 限制响应时间，ms
});
```

### 四、添加请求拦截器

在请求处理前进行拦截，作用主要有设置请求头、统一处理请求路径和参数等。

```ts
import { Log } from "@abner/log";
import { AxiosError, InternalAxiosRequestConfig } from "@ohos/axios";

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 对请求数据做点什么
    Log.info(
      `1-请求配置${config.method!}-${config.url}:${JSON.stringify(
        config.params || config.data
      )}`
    );
    const store = userStore.getUser();
    if (store.token) {
      config.headers.Authorization = store.token;
    }
    return config;
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    Log.error("3-http请求错误：" + JSON.stringify(error));
    return Promise.reject(error);
  }
);
```

### 五、添加响应拦截器

对响应的数据进行统一处理，在拦截器中检查响应的状态码，并根据不同的状态码执行相应的操作。

对于错误结果，弹出提示框或者记录错误日志。

对于成功结果，简化并返回。

```ts
import { AxiosResponse } from '@ohos/axios'
import { promptAction } from '@kit.ArkUI';

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  // 对响应数据做点什么
  // response.data.code 存在且不为 200 时，返回错误结果
  if (response.data?.code && response.data.code !== 200) {
    promptAction.showToast({
	    // 响应的消息，msg根据后端返回的数据确定
      message: response.data?.msg;
    })
    Log.error('3-code响应错误：' + JSON.stringify(response.data))
    return Promise.reject(response.data)
  }
  Log.warn('2-响应成功结果：' + JSON.stringify(response.data))
  // 简化数据返回，data根据后端返回的数据类型来确定
  return response.data?.data;
}, (error: AxiosError) => {
  promptAction.showToast({ message: error.response?.status + '：' + error.message })
  Log.error('3-http响应错误：' + JSON.stringify(error))
  // 对响应错误做点什么
  return Promise.reject(error);
});
```

### 六、封装请求方法

封装 request 请求方法，使用泛型约束返回值类型。

`DataModel`就是返回的响应数据的泛型

`DataParams` 就是请求时的 data 泛型

```ts
import { AxiosRequestConfig } from "@ohos/axios";

export function request<DataModel = null, DataParams = null>(
  config: AxiosRequestConfig<DataParams>
): Promise<DataModel> {
  return axiosInstance<null, DataModel>(config);
}
```

### 七、使用示例

在其他页面中使用

```ts
import { request } from "../utils/Request";

interface User {
  /** token令牌 */
  token: string;
  /** 用户ID */
  id: string;
  /** 用户名称 */
  account: string;
  /** 手机号 */
  mobile: string;
  /** 头像 */
  avatar: string;
}

interface LoginParams {
  /** 手机号 */
  mobile: string;
  /** 密码 */
  password: string;
}

// 登录并返回用户数据
async function login(data: LoginParams) {
  const resData = await request<User, LoginParams>({
    url: "/login",
    method: "post",
    data,
  });
  return resData;
}
```
