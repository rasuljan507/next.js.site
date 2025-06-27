const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
 
  <svg viewBox="-11.5 -10.23174 23 20.46348" {...props}>
    <title>React Logo</title>
    <circle r="2.05" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

export default ReactIcon;