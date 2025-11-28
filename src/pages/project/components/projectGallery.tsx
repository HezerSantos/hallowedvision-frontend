import React, { SetStateAction, useState, useEffect } from "react"
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import imageUrl from '../../../assets/testImages/projectHighlight.png'
import sahntek1 from '../../../assets/testImages/sahntek1.png'
import sahntek2 from '../../../assets/testImages/sahntek2.png'
import sahntek3 from '../../../assets/testImages/sahntek3.png'
interface GalleryItemProps {
    imageUrl: string
    animationState: {toggle: boolean, rightTrigger: boolean, leftTrigger: boolean}
    animationRight: string
    animationLeft: string
}
const GalleryItem: React.FC<GalleryItemProps> = ({imageUrl, animationState, animationRight, animationLeft}) => {
    return(
        <>
            <div className={`gallery-item ${(animationState.rightTrigger? animationRight : animationState.leftTrigger? animationLeft : "")}`}>
                <img src={imageUrl} alt="" />
            </div>
        </>
    )
}

type ShiftType = (setImageList: React.Dispatch<SetStateAction<string[]>>, setAnimationTrigger: React.Dispatch<SetStateAction<{toggle: boolean, rightTrigger: boolean, leftTrigger: boolean}>>) => void
const shiftRight: ShiftType = (setImageList, setAnimationTrigger) => {
    if (window.innerWidth > 1080) {
        setAnimationTrigger({toggle: true, rightTrigger: true, leftTrigger: false})
    } else {
        setImageList(prev => {
            const newList = [...prev]
            if (newList.length) {
                const first = newList.shift() as string
                newList.push(first)
                return newList
            }
            return prev
        })
    }
    
}

const shiftLeft: ShiftType = (setImageList, setAnimationTrigger) => {
    if (window.innerWidth > 1080) {
        setAnimationTrigger({toggle: true, rightTrigger: false, leftTrigger: true})
    } else {
        setImageList(prev => {
            const newList = [...prev]
            if (newList.length) {
                const last = newList.pop() as string
                newList.unshift(last)
                return newList
            }
            return prev
        })
    }
}
const ProjectGallery: React.FC = () => {
    const [ imageList, setImageList ] = useState<string[]>([imageUrl, sahntek1, sahntek2, sahntek3])
    const [ animationState, setAnimationState ] = useState({toggle: false, rightTrigger: false, leftTrigger: false})

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (animationState.rightTrigger) {
                setImageList(prev => {
                    const newList = [...prev]
                    if (newList.length) {
                        const first = newList.shift() as string
                        newList.push(first)
                        return newList
                    }
                    return prev
                })
                setAnimationState({toggle: false, rightTrigger: false, leftTrigger: false})
            }
            if (animationState.leftTrigger) {
                setImageList(prev => {
                    const newList = [...prev]
                    if (newList.length) {
                        const last = newList.pop() as string
                        newList.unshift(last)
                        return newList
                    }
                    return prev
                })
                setAnimationState({toggle: false, rightTrigger: false, leftTrigger: false})
            }
        }, 1150)

        return () => clearTimeout(timeout)

    }, [animationState])
    return(
        <>
            <section className="page-section">
                <div className="page-section__child project-gallery">
                    <h1>Gallery</h1>
                    <div className="gallery-content">
                        {imageList.map((imageUrl, index) => {
                            return(
                                index === 0? (
                                    <GalleryItem imageUrl={imageUrl} key={index} animationRight="shift-first-to-out" animationLeft="shift-first-to-center" animationState={animationState}/>
                                ) : index === 1 ? (
                                    <GalleryItem imageUrl={imageUrl} key={index} animationRight="shift-center-to-first" animationLeft="shift-center-to-last" animationState={animationState}/>
                                ) : index === 2 ? (
                                    <GalleryItem imageUrl={imageUrl} key={index} animationRight="shift-last-to-center" animationLeft="shift-last-to-out" animationState={animationState}/>
                                ) : (
                                    <GalleryItem imageUrl={imageUrl} key={index} animationRight="shift-remaining-to-right" animationLeft="shift-remaining-to-left" animationState={animationState}/>
                                )
                            )
                        })}
                    </div>
                    <div className="gallery-buttons">
                        <div>
                            <button disabled={animationState.toggle} onClick={() => shiftLeft(setImageList, setAnimationState)}><CiCircleChevLeft /></button>
                            <button disabled={animationState.toggle} onClick={() => shiftRight(setImageList, setAnimationState)}><CiCircleChevRight /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectGallery