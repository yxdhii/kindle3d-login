const Textbox = ({ id, type, label }) => (
<div className="textbox">
    <input autoComplete="off" required type={type} id={id} />
    <label htmlFor={id}>{label}</label>
</div>
);

export default Textbox;

