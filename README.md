### 使用electron桌面开发应用
#### 坑点
> 在root根目录下面如果放置"postinstall": "install-app-deps",将会老是报错timeout。实际上移除对开发暂未发现有
> 任何影响

### 热刷新开发方式要点
> 刷新的代码从8080端口，通过webpack-dev-server推送
> 代码上线时，需要手动取消热刷新地址，进行相关配置打包

## 使用方式
``` bash
    npm install //安装依赖
    npm start //查看代码情况
    npm run hot //热刷新代码[加速本地开发]
   
```

### 上线部署
```
    npm run clean //删除部署目录
    npm run pack // 部署上线
```