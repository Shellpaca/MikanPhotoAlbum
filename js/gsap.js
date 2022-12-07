
const displayTitle =  {
    delay: .3,
    duration: .5,
    opacity: 1,
    stagger: {
        each: .1,
        from: "start",
    },
}

    // .to(".title span", displayTitle)
export const titleGsap = gsap.timeline()
    .set(".title span:not(.title span:nth-of-type(11)", {y: "-1em"})
    .to(".title span:not(.title span:nth-of-type(10), span:nth-of-type(11))", displayTitle)
    .to(".title span:nth-of-type(1)", { x: "2em", duration:.3 }, "-=0.2")
    .to(".title span:nth-of-type(2)", { x: "2em", duration:.3 }, "-=0.2")
    .to(".title span:nth-of-type(3)", { x: "2em", duration:.3 }, "-=0.2")
    .to(".title span:nth-of-type(5)", { opacity: 0, duration:.3 }, "-=0.2")
    .to(".title span:nth-of-type(6)", { x: "-1em", duration:.3 }, "-=0.2")
    .to(".title span:nth-of-type(7)", { x: "-1em", duration:.3 }, "-=0.2")
    .to(".title span:nth-of-type(8)", { x: "-1em", duration:.3, opacity: 0 }, "-=0.2")
    .to(".title span:nth-of-type(9)", { x: "-2em", duration:.3, opacity: 0 }, "-=0.3")
    .to(".title span:nth-of-type(10)", { opacity: 1, duration: .5, delay:.2 }, "-=0.2")
    .to(".title span:nth-of-type(11)", displayTitle)
    .to(".header-wrapper", { opacity: 0, duration:.5, display:"none", delay: 1 })

// x: x軸方向への移動量
// y: y軸方向への移動量
// repeat: アニメーションのリピート回数
// delay: アニメーションが開始するまでの時間
// duration: アニメーションの長さ
// ease: アニメーションの変化率
// onUpdate: アニメーションがアップデートされる際に呼び出される関数
// onComplete: アニメーション終了した際に呼び出される関数
