import React from "react";
import { useParams } from "react-router-dom";

function MovieShow ({movies}) {
    const params = useParams();
return (
    <div>
    <h3>Movie Show Component!</h3>
    </div>
);
}
export default MovieShow;