import React, {useState} from 'react';
import MapScreen from "./MapScreen";

const SearchAddress = () => {

    const [inputText, setInputText] = useState("");
    const [address, setAddress] = useState("");

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddress(inputText);
        setInputText("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder='주소를 입력해 주세요. (읍,면,동)'
                       onChange={onChange}
                       value={inputText}
                       style={{width:'500px', height:'40px', borderRadius:'20px 0 0 20px', border:'solid 1px #999', paddingLeft:'20px', outline:'0'}}/>
                <button type='submit' style={{width:'100px', height:'40px', backgroundColor: 'none', borderRadius:'0 20px 20px 0', outline:'0', border:'solid 1px #999', borderLeft:'none'}}>
                    <i className="fas fa-search"></i>
                </button>
            </form>
            <MapScreen searchAddress={address} />
        </div>
    );
};


export default SearchAddress;
