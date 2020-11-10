import React from "react"

export default function Layout(props) {

const { //destructuring the props
    children,
    location, //check SendGrid's layout
} = props;

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <h3>SiteTitle</h3>
      {children}
    </div>
  )
}