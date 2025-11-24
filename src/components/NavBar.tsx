import { styleNavBar } from "../styles/components/NavBar"


export const NavBar = () => {
  return (
    <div className="ct-navbar" style={styleNavBar}>

      {/* Nav bar */}
      <svg
        onClick={e => { console.log(e) }}

        height={'30px'}
        role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Home</title><path d="M12 0a1.44 1.44 0 0 0-.947.399L.547 10.762a1.26 1.26 0 0 0-.342.808v11.138c0 .768.53 1.292 1.311 1.292h20.968c.78 0 1.311-.522 1.311-1.292V11.57a1.25 1.25 0 0 0-.34-.804L15.68 3.097h-.001L12.947.4A1.454 1.454 0 0 0 12 0Zm0 6.727 6.552 6.456v5.65H5.446v-5.65z" /></svg>


      <svg
        onClick={e => { console.log(e) }}

        height={'30px'}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    >
        <path fill="#000000" d="M15.5 5.4L15 5V1c0-.6-.4-1-1-1s-1 .4-1 1v.5C11 2.4 8 4 5 4H2.5C1.1 4 0 5.2 0 6.5c0 .9.5 1.7 1.2 2.1l1.1 5.9c0 .3.3.5.7.5h.2l3.6-.7c.4-.1.6-.4.5-.7c-.3-.6-.8-1.5-1.2-1.8c-.2-.1-.5-.9-.7-1.8H6v-.9c2.7.3 6 1.6 7 2.4v.5c0 .6.4 1 1 1s1-.4 1-1V8l.4-.3c.4-.3.6-.7.6-1.1v-.2c0-.4-.2-.7-.5-1zM2 5h3v1H2V5zm3.6 7.6c.1 0 .3.3.5.7l-2.8.7l-1-5h1.9c.2 1.3.6 3.2 1.4 3.6zm7.4-2.3c-1.6-.8-4.4-2-7-2.3V5c2.6-.3 5.4-1.4 7-2.3v7.6z"></path>
      </svg>


      <svg
        onClick={e => { console.log(e) }}

        height={'30px'}
        role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>iMessage</title><path d="M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154" />
      </svg>


      <svg
        onClick={e => { console.log(e) }}
        height={'30px'}
        viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"></path><path fill="#000000" d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"></path><path fill="#000000" d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"></path></g>
      </svg>

      <svg
        onClick={e => { console.log(e) }}
        height={'30px'}
        viewBox="0 0 16.00 16.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6 10C4.80291 10 3.76957 10.7012 3.28827 11.7152C2.48151 10.6934 2 9.40294 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.40294 13.5185 10.6934 12.7117 11.7152C12.2304 10.7012 11.1971 10 10 10H6Z" fill="#000000"></path> </g>
        </svg>
    </div>
  )
}
