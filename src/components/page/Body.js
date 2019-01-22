import React from 'react'
import { Header,Image, Button, Segment, Embed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Body(props) {

    const { title, image, tags, body } = props.data
    const json_data = JSON.stringify(props.data)
    const tag_list = tags.map(tag => <Button size='mini' as={Link} to='/' >{tag}</Button>)
    const body_list = body.map(block => <Bodyblock key={block.id} type={block.type} value={block.value} />)

    return (
        <div>
            {json_data}
            <Header as='h2'>{title}</Header>
            <Image src={image.meta.download_url} fluid />
            {body_list}
            <br />
            <p>Tags:</p>
            {tag_list}
        </div>
    )
}


const Bodyblock = (props) => {
    const { type, value } = props

    switch (type) {
        case 'heading_block':
            return <Header as={value.size}>{value.heading_text}</Header>
        case 'paragraph_block':
            return <div dangerouslySetInnerHTML={{__html: value}} />
        case 'block_quote':
            return <Segment>{value.text}</Segment>
        case 'embed_block':
            return <Embed src={value} />
        default:
            return <div></div>
    }

}