const GlassDistortion = () => (
  <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
    <filter id="liquid-glass-distort" x="-20%" y="-20%" width="140%" height="140%">
      {/* Blur the shape's own alpha to create a soft ramp at the border */}
      <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="blurredAlpha" />

      {/* Use that ramp as the x/y displacement map — strongest exactly
          where the alpha transitions (the rounded edge), ~zero in the
          flat interior */}
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurredAlpha"
        scale="70"
        xChannelSelector="A"
        yChannelSelector="A"
        result="displaced"
      />

      {/* Clip back to the pill's exact shape so the bend never bleeds
          outside the rounded border */}
      <feComposite in="displaced" in2="SourceAlpha" operator="in" />
    </filter>
  </svg>
);

export default GlassDistortion;
