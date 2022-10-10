
import { useKeenSlider } from "keen-slider/react"
export default function useSlider(name:string,) {
    let perview:number = 0;
        if(name === "regions"){
            perview = 4
        }
        if(name === "purposes"){
            perview = 3
        }
        if(name === "places"){
            perview = 6
        }
    
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: {
                perView: perview
            }
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return sliderRef
}