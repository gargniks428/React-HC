function func(root,reactElement){
    let element=document.createElement(reactElement.type)
    element.setAttribute('href',reactElement.props.href)
    element.setAttribute('target',reactElement.props.target)
    element.innerHTML=reactElement.childen
    root.appendChild(element)

}

const reactElement={
    type:'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank'
    },
    childen:'VIsit to Google.com'
}

const root=document.querySelector('#root');
func(root,reactElement)