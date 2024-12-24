import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Form, Input } from "antd";
import emailjs from "@emailjs/browser";
import TextArea from "antd/es/input/TextArea";
import "./FormInput.css";

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

const FormInput = () => {
    //@ts-ignore
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => emailjs.init("MZwegXDR5iRoIvH8N"), [])

    const onFinish = async (value: any) => {

        const accidentId = searchParams.get('accidentId');
        const zipCode = searchParams.get('zipCode');
        const data = { ...value, accidentId: accidentId, zipCode: zipCode };

        const serviceId = "service_1o6eyel";
        const templateId = "template_5zz6a0p";

        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: "Top Lawyer",
                recipient: "njlawyers@hotmail.com",
                from_name: data.user,
                email: data.email,
                accidentId: data.accidentId,
                fault: data.fault,
                medical: data.medical,
                period: data.period,
                phone_number: data.phone_number,
                signup: data.signup,
                stay: data.stay,
                zipCode: data.zipCode,
                reply_to: data.email,
                message: data.message,
            });
            navigate("/confirmAlert");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <> {
            loading ? <div className="w-full h-[900px] flex flex-col items-center justify-center gap-5">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-color1" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="text-3xl sr-only text-color1">Loading...</span>
                </div>
                <h1 className="text-3xl">Sending Message...</h1>
            </div> : <div className="flex flex-col items-center justify-between w-full min-h-screen form-bg md:flex-row">
                <div className="md:w-[57%] w-[95%] flex flex-col items-center text-center py-16 min-h-[calc(100vh-88px)] justify-center h-full">
                    <p className="pt-10 font-bold text-[36px] text-[white] xl:px-32 md:px-16">Briefly Describe Your Case to Connect with a Top Lawyer</p>
                </div>
                <div className="bg-[#ffffff3a] p-6 sm:p-16">
                    <Form
                        name="nest-messages"
                        initialValues={{
                            period: "Less than 1 Year",
                            signup: "Yes",
                            stay: "Back or Neck Pain",
                            fault: "Yes",
                            medical: "Yes"
                        }}
                        layout="vertical"
                        labelWrap
                        colon={false}
                        onFinish={onFinish}
                        // style={{ maxWidth: 700 }}
                        validateMessages={validateMessages}
                    >
                        <div className="flex flex-col justify-between w-full sm:flex-row">
                            <Form.Item name={['user']}
                                label={<p className="font-bold text-xl text-[white]">Your Full Name</p>}
                                rules={[{ required: true }]}
                                // style={{ width: '48%' }}
                                className="sm:w-[48%] w-full"
                            >
                                <Input size="large" placeholder="Your Full Name" />
                            </Form.Item>
                            <Form.Item name={['email']}
                                label={<p className="font-bold text-xl text-[white]">Your Email Address</p>}
                                rules={[{ type: 'email', required: true }]}
                                className="sm:w-[48%] w-full"
                            >
                                <Input size="large" placeholder="Your Email Address" />
                            </Form.Item>
                        </div>
                        <div className="flex flex-col justify-between w-full">
                            <Form.Item name={['phone_number']}
                                label={<p className="font-bold text-xl text-[white]">Your Phone Number</p>}
                                rules={[{ required: true }]}
                                className="sm:w-[48%] w-full"
                            >
                                <Input size="large" placeholder="Your Phone" />
                            </Form.Item>
                        </div>
                        <div className="flex flex-col justify-between w-full">
                            <Form.Item name={['period']}
                                label={<p className=" text-xl font-bold text-[white]">When did the incident happen?</p>}
                                rules={[{ required: true }]}
                            // style={{ width: '48%' }}
                            >
                                <select className="w-full h-[40px] outline-none rounded-[5px] text-base pl-2">
                                    <option value="Less than 1 Year">Less than 1 Year</option>
                                    <option value="Less than 2 Year">Less than 2 Year</option>
                                    <option value="Less than 3 Year">Less than 3 Year</option>
                                </select>
                            </Form.Item>
                            <Form.Item name={['medical']}
                                label={<p className="font-bold text-[white] text-xl">Did the incident cause financial harm ?</p>}
                                rules={[{ required: true }]}
                            // style={{ width: '48%' }}
                            >
                                <select className="w-full h-[40px] outline-none rounded-[5px] text-base pl-2">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </Form.Item>
                        </div>
                        <div className="flex flex-col justify-between w-full">
                            <Form.Item name={['fault']}
                                label={<p className="font-bold text-[white] text-xl">Was anyone else affected by the incident?</p>}
                                rules={[{ required: true }]}
                            // style={{ width: '45%' }}
                            >
                                <select className="w-full h-[40px] outline-none rounded-[5px] text-base pl-2">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </Form.Item>
                            <Form.Item name={['signup']}
                                label={<p className="font-bold text-[white] text-xl">Have you ever signed up with a law firm to help you with this case?</p>}
                                rules={[{ required: true }]}
                            // style={{ width: '45%' }}
                            >
                                <select className="w-full h-[40px] outline-none rounded-[5px] text-base pl-2">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </Form.Item>
                        </div>
                        <div className="flex flex-col justify-between w-full">
                            <Form.Item name={['stay']}
                                label={<p className="font-bold text-[white] text-xl">What was the primary type of injustice you feel?</p>}
                                rules={[{ required: true }]}
                            // style={{ width: '48%' }}
                            >
                                <select className="w-full h-[40px] outline-none rounded-[5px] text-base pl-2">
                                    <option value="Back or Neck Pain">Financial loss</option>
                                    <option value="Headaches">Stolen Assets</option>
                                    <option value="Cuts and Bruises">Financially Exploited </option>
                                    <option value="Other">Other</option>
                                </select>
                            </Form.Item>
                        </div>
                        <Form.Item name={['message']}
                            label={<p className="font-bold text-[white] text-xl">Additional Case Details.</p>}
                            rules={[{ required: true }]}
                            style={{ width: '100%' }}
                        >
                            <TextArea style={{ height: '150px', fontSize: '16px' }} placeholder="Briefly describe your case." />
                        </Form.Item>
                        <Form.Item>
                            <button type="submit" className=" w-[200px] rounded-[5px] px-10 py-3 font-sans font-bold text-base text-[white] bg-color1">Send</button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        }

        </>
    )
}

export default FormInput;