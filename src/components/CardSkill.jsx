function CardSkill({title, img}) {
    return (
        <div className="m-auto bg-gray-100 dark:bg-gray-900 rounded-xl text-black w-[80%] dark:text-gray-100 md:w-[150px] bg">
            <img className="p-5 pb-8 rounded-xl" src={img} alt={title} />
            <p className="text-center pb-8 md:pb-5 font-bold uppercase text-3xl md:text-xl tracking-widest font-['Bebas_Neue']">{title}</p>
        </div>
    );
}

export default CardSkill;