import { NavLink, useNavigate } from "react-router-dom";
import { useGenerationButtons } from "../../hooks/useButtonsGeneration";

import { useDispatch } from "react-redux";
import { changeGeneration } from "../../store/generationSlice";
function ObtenerGeneraciones() {
    const { generationButtonData } = useGenerationButtons()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleBack = () => {
        navigate("/")
    }
    const handleGeneration = (e) => {
        dispatch(changeGeneration(e.target.id))
    }
    return (
        <>
            <button className="btn btn-dark" onClick={handleBack}> ← </button>
            <section className="w-100 text-center">
                <h1 className="my-5">Which generation do you want to know about?</h1>
            </section>
            <section className="w-100 px-5 d-flex flex-wrap justify-content-between align-items-center" style={{ height: "40vh" }}>
                {generationButtonData.data && generationButtonData.data.results.map((button, index) => <NavLink onClick={handleGeneration} className="btn btn-primary mx-5 btn-lg text-capitalize boton" key={index} id={index + 1} to={`${button.name}`}>{button.name}</NavLink>)}
            </section>
        </>);
}

export default ObtenerGeneraciones;