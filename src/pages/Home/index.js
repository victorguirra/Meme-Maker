import React, {useState, useEffect} from 'react';

import logo from '../../images/logo.svg'

import {Wrapper, Card, Templates, Form, Button} from './styles.js';

export default function Home(){
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null)

    useEffect(() => {
        (async () => {
            const resp = await fetch('https://api.imgflip.com/get_memes');
            const {data : {memes}} = await resp.json();
            setTemplates(memes);
        })();
    }, [])

    return(
        <Wrapper>

            <img src={logo} alt="Logo MemeMaker" />

            <Card>

                <h2>Selecione um template</h2>

                <Templates>

                    {templates.map((template) => (
                        <button 
                        key={template.id}
                        type="button"
                        onClick={() => setSelectedTemplate(template)}
                        className={template.id === selectedTemplate?.id && 'selected'}
                        >

                            <img src={template.url} alt={template.name} />

                        </button>
                    ))}

                </Templates>

                <h2>Textos</h2>

                <Form>

                    <input  placeholder="Texto #1"/>
                    <input  placeholder="Texto #1"/>
                    <input  placeholder="Texto #1"/>

                    <Button type="submit">MakeMyMeme</Button>

                </Form>

            </Card>

        </Wrapper>
    )
}