import React from "react";
import {useVocabularies} from "../api/VocabularyApi";


const Vocabularies: React.FC = () => {
    const {data = [], isLoading} = useVocabularies();
    if (isLoading) return <h2>Loading...</h2>
    console.log(data)
    return (<div>
        <h2>Vocabularies</h2>
    </div>);
}

export default Vocabularies;