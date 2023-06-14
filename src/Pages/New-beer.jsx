import { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewBeer(props) {

    const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewer_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const handleName = (event) => setName(event.target.value);
  const handleTagline = (event) => setTagline(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleFirstBrewed = (event) => setFirst_brewed(event.target.value);
  const handleBrewersTips = (event) => setBrewer_tips(event.target.value);
  const handleAttenuationLevel = (event) =>
    setAttenuation_level(event.target.value);
  const handleContributedBy = (event) =>
    setContributed_by(event.target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onChange(
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    );
    navigate("/beers");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h1>Add New Beer</h1>

      <label htmlFor="name">Name</label>
      <input id="name" value={name} type="text" onChange={handleName} />

      <label htmlFor="tagline">Tagline</label>
      <input id="tagline" value={tagline} type="text" onChange={handleTagline} />

      <label htmlFor="description">Desription</label>
      <input
        id="description"
        value={description}
        type="text"
        onChange={handleDescription}
      />

      <label htmlFor="first_brewed">First Brewed</label>
      <input
        id="first_brewed"
        value={first_brewed}
        type="text"
        onChange={handleFirstBrewed}
      />

      <label htmlFor="brewers_tips">Brewers Tips</label>
      <input
        id="brewers_tips"
        value={brewers_tips}
        type="text"
        onChange={handleBrewersTips}
      />

      <label htmlFor="attenuation_level">Attenuation Level</label>
      <input
        id="attenuation_level"
        value={attenuation_level}
        type="number"
        onChange={handleAttenuationLevel}
      />

      <label htmlFor="contributed_by">Contributed By</label>
      <input
        id="contributed_by"
        value={contributed_by}
        type="text"
        onChange={handleContributedBy}
      />

      <button type="submit" >Create</button>
    </form>
  );
}

export default NewBeer;
