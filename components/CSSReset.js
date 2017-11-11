const CSSReset = () => (
  <style jsx global>{`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-weight: inherit;
      font-style: inherit;
      font-size: 100%;
      font-family: inherit;
      vertical-align: baseline;
    }
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    ol, ul {
      list-style: none;
    }
  `}</style>
);
export default CSSReset
