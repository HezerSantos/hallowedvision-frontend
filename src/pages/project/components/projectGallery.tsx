import React, { SetStateAction, useState } from "react"
import imageUrl from '../../../assets/testImages/projectHighlight.png'
import sahntek1 from '../../../assets/testImages/sahntek1.png'
import sahntek2 from '../../../assets/testImages/sahntek2.png'
import sahntek3 from '../../../assets/testImages/sahntek3.png'
interface GalleryItemProps {
    imageUrl: string
}
const GalleryItem: React.FC<GalleryItemProps> = ({imageUrl}) => {
    return(
        <>
            <div className="gallery-item">
                <img src={imageUrl} alt="" />
            </div>
        </>
    )
}

type ShiftType = (setImageList: React.Dispatch<SetStateAction<string[]>>) => void
const shiftRight: ShiftType = (setImageList) => {
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

const shiftLeft: ShiftType = (setImageList) => {
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
const ProjectGallery: React.FC = () => {
    const [ imageList, setImageList ] = useState<string[]>([imageUrl, sahntek1, sahntek2, sahntek3])
    return(
        <>
            <section className="page-section">
                <div className="page-section__child project-gallery">
                    <h1>Gallery</h1>
                    <div className="gallery-content">
                        {imageList.map((imageUrl, index) => {
                            return(
                                <GalleryItem imageUrl={imageUrl} key={index} />
                            )
                        })}
                    </div>
                    <div>
                        <button onClick={() => shiftLeft(setImageList)}>Prev</button>
                        <button onClick={() => shiftRight(setImageList)}>Next</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectGallery