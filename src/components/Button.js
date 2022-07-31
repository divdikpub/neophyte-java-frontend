function Button(props) {
  return (
    <button
      style={{
        background: "blue",
        color: "white",
        height: 36,
        paddingInline: 18,
        borderRadius: 18,
        border: "unset",
      }}
      onClick={props.tindakanSaatDiklik}
    >
      {props.children}
    </button>
  );
}

export default Button;
