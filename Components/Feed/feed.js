import React, { useState, useEffect, useContext } from "react";
import "./feed.css"

const Feed = () => {
    const [counter, setCounter] = useState(0)
    const [newComents, setNewComents] = useState("")
    const [openComents, setOpenComents] = useState(false)
    const profilePicture = "https://1.bp.blogspot.com/-Tp2kM98Ktr4/XXuwLFQITTI/AAAAAAAAJQU/uwsACCcNczMtGwxTuGeefpMxn3J8elWmACLcBGAsYHQ/s1600/image.jpg"
    const [fakeJson, setFakseJson] = useState([
        {
            title: "Primer Post",
            img: "https://www.nationalgeographic.com.es/medio/2021/05/05/lago-wanakanueva-zelanda_3bca218b_800x800.jpg",
            coments: ["cometarios 7", "cometarios 1", "cometarios 6", "cometarios 4"],



        },
        {
            title: "Segundo Post",
            img: "https://www.nationalgeographic.com.es/medio/2021/05/05/lago-wanakanueva-zelanda_3bca218b_800x800.jpg",
            coments: ["cometarios 3", "cometarios 4", "cometarios 5", "cometarios 3"],

        },
        {
            title: "Tercer Post",
            img: "https://www.nationalgeographic.com.es/medio/2021/05/05/lago-wanakanueva-zelanda_3bca218b_800x800.jpg",
            coments: ["cometarios 12", "cometarios 80", "cometarios 66", "cometarios 44"],


        }

    ])
    useEffect(() => {

    }, [newComents, counter])

    function handleLike() {
        setCounter(counter + 1)
    }
    function handleDislike() {
        if (counter <= 0) {
            setCounter(0)
        } else {

            setCounter(counter - 1)
        }
    }

    const extraComents = ["cometarios 3", "cometarios 4", "cometarios 5", "cometarios 3"]
    return (
        <>
            <div className="feed">
                <div className="feed__content">
                    <div className="feed__content__header">
                        <div className="feed__content__header__photo">
                            <img src={profilePicture} />
                        </div>
                        <div className="feed__content__header__input">
                            <input type="text" placeholder="Escribe aqui tu publicación" />
                        </div>
                    </div>
                    <div className="feed__content__main">
                        {
                            fakeJson && fakeJson.map((e, i) => {
                                return (
                                    <>
                                        <div className="feed__content__main__card">
                                            <div className="feed__content__main__header">
                                                <h3>{e.title}</h3>
                                            </div>
                                            <div className="feed__content__main__img">
                                                <img src={e.img} />
                                            </div>
                                            <div className="feed__content__main__footer">
                                                <div key={i} className="feed__content__main__footer__likes">
                                                    <h3>{counter} likes</h3>
                                                    <button onClick={handleLike}>Like :)</button>
                                                    <button onClick={handleDislike}>Dislike :(</button>
                                                </div>
                                                <div className="feed__content__main__footer__comments" onClick={() => setOpenComents(true)}>
                                                    {
                                                        !openComents ?
                                                            <h3>Aqui puedes escribir tu comentario</h3>
                                                            :
                                                            <>
                                                                <input type="text" placeholder="Escribe tus comentarios " onChange={(e) => {
                                                                    setNewComents(e.target.value)
                                                                }} />
                                                                <div className="feed__content__main__footer__come">



                                                                    {
                                                                        extraComents && extraComents.map((e) => {
                                                                            return (
                                                                                <>
                                                                                    <ul>
                                                                                        <li>

                                                                                            {e}
                                                                                        </li>
                                                                                    </ul>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }


                                                                </div>
                                                            </>

                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed