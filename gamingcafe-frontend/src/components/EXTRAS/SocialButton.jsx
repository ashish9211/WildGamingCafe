import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderBlank, faReact } from "@fortawesome/free-solid-svg-icons";
const SocialButton = () =>{
    return (
        <>
        <span className="fa-layers">
            <FontAwesomeIcon icon={faFolderBlank} />
            <FontAwesomeIcon icon={faReact} color={"white"} fontSize={32} />
            <span className="fa-layers-counter">12</span>
        </span>
        </>
    )
}
export default SocialButton;