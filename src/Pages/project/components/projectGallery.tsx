import React, { SetStateAction, useState, useEffect } from "react"
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
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

type ShiftType = (setImageList: React.Dispatch<SetStateAction<string[] | undefined>>, setAnimationTrigger: React.Dispatch<SetStateAction<{toggle: boolean, rightTrigger: boolean, leftTrigger: boolean}>>) => void
const shiftRight: ShiftType = (setImageList, setAnimationTrigger) => {
    if (window.innerWidth > 1080) {
        setAnimationTrigger({toggle: true, rightTrigger: true, leftTrigger: false})
    } else {
        setImageList(prev => {
            if(prev){
                const newList = [...prev]
                if (newList.length) {
                    const first = newList.shift() as string
                    newList.push(first)
                    return newList
                }
                return prev
            }
        })
    }
    
}

const shiftLeft: ShiftType = (setImageList, setAnimationTrigger) => {
    if (window.innerWidth > 1080) {
        setAnimationTrigger({toggle: true, rightTrigger: false, leftTrigger: true})
    } else {
        setImageList(prev => {
            if(prev){
                const newList = [...prev]
                if (newList.length) {
                    const last = newList.pop() as string
                    newList.unshift(last)
                    return newList
                }
                return prev
            }
        })
    }
}

interface ProjectGalleryProps {
    galleryImages: string[] | undefined
}
const ProjectGallery: React.FC<ProjectGalleryProps> = ({galleryImages}) => {
    const [ imageList, setImageList ] = useState<string[] | undefined>(galleryImages)
    const [ animationState, setAnimationState ] = useState({toggle: false, rightTrigger: false, leftTrigger: false})
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (animationState.rightTrigger) {
                setImageList(prev => {
                    if (prev) {
                        const newList = [...prev]
                        if (newList.length) {
                            const first = newList.shift() as string
                            newList.push(first)
                            return newList
                        }
                        return prev
                    }
                })
                setAnimationState({toggle: false, rightTrigger: false, leftTrigger: false})
            }
            if (animationState.leftTrigger) {
                setImageList(prev => {
                    if(prev) {
                        const newList = [...prev]
                        if (newList.length) {
                            const last = newList.pop() as string
                            newList.unshift(last)
                            return newList
                        }
                        return prev
                    }
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
                        {imageList?.map((imageUrl, index) => {
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
                            <button aria-label="Previous image" disabled={animationState.toggle} onClick={() => shiftLeft(setImageList, setAnimationState)}><CiCircleChevLeft /></button>
                            <button aria-label="Next image" disabled={animationState.toggle} onClick={() => shiftRight(setImageList, setAnimationState)}><CiCircleChevRight /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectGallery