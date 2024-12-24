import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Form, Input } from "antd";
import emailjs from "@emailjs/browser";
import TextArea from "antd/es/input/TextArea";

import { accident_style } from "@/stack/stack";

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid phone number!'
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};


const Contact = () => {

    const [accidentId, setAccidentId] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => emailjs.init("YqhHimx4WJvVTMIXU"), [])

    const onFinish = async (value: any) => {
        const data = value;
        const serviceId = "service_sfn99yn";
        const templateId = "template_weetxsy";

        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: "Stock scam",
                recipient: "info@xgepro.com",
                from_name: data.user,
                email: data.email,
                accidentId: accident_style[data.accident_type].name,
                phone_number: data.phone_number,
                reply_to: data.email,
                message: data.message,
                logoUrl: 'https://stock-scam.com/icons/logo.svg',
                logoLink: 'https://stock-scam.com/',
                logoString: 'Stock Scam'
            });
            navigate("/confirmAlert");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? <div className="w-full h-[900px] flex flex-col items-center justify-center gap-5" id="contact">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-color1" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="text-3xl sr-only text-color1">Loading...</span>
                </div>
                <h1 className="text-3xl">Sending Message...</h1>
            </div> : <div className="w-full py-16 bg-color2" id="contact">
                <div id="#contact" className="xl:w-[70%] lg:w-[80%] md:w-[90%] w-[95%] mx-auto flex md:flex-row flex-col gap-10 my-16">
                    <div className="basis-[40%] flex flex-col gap-8 items-center md:items-start">
                        <p className=" w-[130px] text-sm tracking-widest font-bold py-1 px-2 border-l-4 border-l-color1 bg-[white]">Get in touch</p>
                        <p className="pr-2 text-5xl font-bold tracking-widest">Contact US</p>
                        <div className="text-xl md:w-[450px]">Please fill out the following form and we'll be in touch with you in less than 24 hours.</div>
                    </div>
                    <div className="basis-[60%]">
                        <Form
                            name="nest-messages"
                            initialValues={{
                                accident_type: 0
                            }}
                            layout="vertical"
                            labelWrap
                            colon={false}
                            onFinish={onFinish}
                            style={{ maxWidth: 1000 }}
                            validateMessages={validateMessages}
                        >
                            <div className="flex justify-between w-full">
                                <Form.Item name={['user']}
                                    rules={[{ required: true }]}
                                    style={{ width: '45%' }}
                                >
                                    <Input size="large" placeholder="Your Name" />
                                </Form.Item>
                                <Form.Item name={['email']}
                                    rules={[{ type: 'email', required: true }]}
                                    style={{ width: '45%' }}
                                >
                                    <Input size="large" placeholder="Your Email Address" />
                                </Form.Item>
                            </div>
                            <div className="flex justify-between w-full">
                                <Form.Item name={['phone_number']}
                                    rules={[{ required: true }]}
                                    style={{ width: '45%' }}
                                >
                                    <Input size="large" placeholder="Your Phone" />
                                </Form.Item>
                                <Form.Item name={['accident_type']}
                                    rules={[{ required: true }]}
                                    style={{ width: '45%' }}
                                >
                                    <select value={accidentId} name="Find Lawyer" id="find_lawyer" className="bg-color2 w-full h-[40px] rounded-l-[5px] px-2" onChange={(e) => setAccidentId(Number(e.target.value))}>
                                        {
                                            accident_style.map((item, index) => {
                                                return <option key={index} value={index}>
                                                    {item.name}
                                                </option>
                                            })
                                        }
                                    </select>
                                </Form.Item>
                            </div>
                            <Form.Item name={['message']} style={{ width: '100%' }}
                                rules={[{ required: true }]}
                            >
                                <TextArea style={{ height: 150 }} placeholder="Message"></TextArea>
                            </Form.Item>
                            <Form.Item>
                                <button type="submit" className=" md:w-[200px] w-full border rounded-[5px] px-10 py-3 font-sans font-bold text-xl text-[white] bg-color1">Send</button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Contact;