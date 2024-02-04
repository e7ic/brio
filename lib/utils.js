import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function generateMixed8DigitID() {
    // 获取当前时间戳
    const timestamp = Date.now();
    // 生成一个随机数以增加额外的唯一性，这里使用较大的随机数确保更多的字母参与
    const randomComponent = Math.random().toString(36).substring(2, 3);
    // 将时间戳和随机数结合，转换为基数36的字符串，这样可以确保结果中包含字母
    return (timestamp.toString(36) + randomComponent).substring(-8).toLocaleUpperCase();
}

export function debounce(func, wait, immediate) {

    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout); // timeout 不为null
        if (immediate) {
            let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) {
                func.apply(context, args)
            }
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
}