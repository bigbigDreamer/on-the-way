import React, {FC, useLayoutEffect, useRef} from 'react';

import './index.scss';

const DivColor: Record<string, string> = {
    '3' : '#0081ff',
    '1': '#f0f0f0',
    '2': '#000000'
}

let index = 0

let timer: NodeJS.Timeout | null = null;

const swipWrapper = (img_box: any) => {
    console.log(index)
    index++;  // 进入下一张图片
    // 如果是在最后一张图片
    if (index >= 3) {
        // 此处是为了防止频繁点击按钮，index++，导致index超过4，变成5、6、7...
        // 当index>=4，我们强行让其等于4,类似防抖
        index = 3;
        img_box.current.style.transition = 'all, linear, 1.5s';
        img_box.current.style.transform = `translateX(${-index * 500}px)`

        // 此处就是我们为实现无缝轮播，做的手脚
        // 通过延时定时器，当图片过渡完，立刻马上切换到第一张图片
          setTimeout(function() {
            console.log(img_box.current)
            index = 0;  // 第一张图片
            img_box.current.style.transition = '';
            img_box.current.style.transform = `translateX(${-index * 500}px)`
        }, 1500)

        // 如果是其它图片，正常过渡切换
    } else {
        img_box.current.style.transition = 'all, linear, 1.5s';
        img_box.current.style.transform = `translateX(${-index * 500}px)`
    }

}

const Carousel: FC = () =>{

    const contentRef = useRef(null);

    // useLayoutEffect(() => {
    //     setInterval(() => {
    //         handleClick();
    //     }, 1500);
    // }, []);

    const handleClick = () => {
        swipWrapper(contentRef);
    }

    return (
        <div className="carousel">
            <button onClick={handleClick}>洗衣液</button>
            <div className="carousel-wrapper">
                <div className="carousel-content" ref={contentRef}>
                    {
                        ['1','2','3','1'].map(item => (
                            <div className="carousel-item" style={{ background: DivColor[item] }}>
                                <h1>{item}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Carousel;