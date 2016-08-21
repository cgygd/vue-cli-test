// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

export function getCount (state) {
    return state.count
}

export function getShowmodal (state) {
    console.log('这里是取值：'+state.showmodal)
    console.log('取值判断类型：'+typeof(state.showmodal));
    return state.showmodal
}
