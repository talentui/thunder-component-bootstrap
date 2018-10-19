
//动态打包方案下的构建入口
/**
 * webpack 按需加载，设置public path
 */
__webpack_public_path__ =
    "//stnew03.beisen.com/ux/upaas/" +
    process.env.packageName +
    "/release/dist/";
import propsLoader from './propsLoader';
import component from '&/index.js'
component = propsLoader(component);
/**
 * 组件注册
 */
const componentCode = process.env.componentCode;//组件编码
const appId = process.env.appId;//组件的应用ID
window._talentui_registry.update("_externalComp", function(externalComp) {
    if (externalComp === undefined) {
        const newValue = {};
        newValue[appId] = {};
        newValue[appId][componentCode] = component;
        return newValue;
    } else {
        const curValue = externalComp[process.env.appId] || {};
        const newObj = {};
        newObj[componentCode] = component;
        externalComp[process.env.appId] = Object.assign({}, curValue, newObj);
        return externalComp;
    }
});