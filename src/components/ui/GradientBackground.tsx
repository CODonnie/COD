const GradientBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blob 1 */}
      <div className="absolute top-[-10%] left-[-29%] 
        h-[90%] w-[80%] 
        rounded-full 
        bg-[#030c15] 
        animate-blob">
      </div>

      {/* Blob 2 */}
      <div className="absolute top-[-12%] right-[-12%] 
        h-[80%] w-[70%] 
        rounded-full 
        bg-[#43868e] 
        animate-blob 
        [animation-delay:2s]">
      </div>

      {/* Blob 3 */}
      <div className="absolute bottom-[-15%] right-[-20%] 
        h-[65%] w-[80%] 
        rounded-full 
        bg-[#030c15] 
        animate-blob 
        [animation-delay:0.4s]">
      </div>

      {/* Blob 4 */}
      <div className="absolute bottom-[-10%] left-[-18%] 
        h-[50%] w-[75%] 
        rounded-full 
        bg-[#030c12] 
        animate-blob 
        [animation-delay:1s]">
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[80px]"></div>

    </div>
  )
}

export default GradientBackground
