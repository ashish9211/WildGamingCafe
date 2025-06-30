const TextBox = ({ children }) => {
  return (
    <div className="bg-black/60 text-white font-montserrat font-semibold p-6 rounded-lg max-w-xl max-h-60 overflow-y-auto">
      <p className="text-sm md:text-lg leading-relaxed">
        {children}
      </p>
    </div>
  );
};

export default TextBox;
