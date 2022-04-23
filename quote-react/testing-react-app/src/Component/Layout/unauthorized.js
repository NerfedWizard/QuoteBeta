import { useNavigate } from "react-router-dom"
import { ColorButton, linksStyle, Item } from '../../Style/styles';

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <ColorButton onClick={goBack}>Go Back</ColorButton>
            </div>
        </section>
    )
}

export default Unauthorized