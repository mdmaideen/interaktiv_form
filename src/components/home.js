import React from "react";


import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from "react";






function Home() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ind, setInd] = useState(true);
    const [org, setOrg] = useState(true);
    const [ana, setAna] = useState(true);

    const [term, setTerm] = useState(true);


    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("");



    const handlechange = (check) => {
        if (check == 'ind') {
            if (ind == true) {
                console.log(check, "our option")
            }
            setInd(!ind);
        }
        if (check == 'org') {
            if (org == true) {
                console.log(check, "our option")
            }
            setOrg(!org);
        }
        if (check == 'ana') {
            if (ana == true) {
                console.log(check, "our option")
            }
            setAna(!ana)
        }


        if (check == 'term') {
            if (term == true) {
                console.log(check, "verifed")
            }
            setTerm(!term)
        }

    }



    return (


        <>


            <div className="screen1">
                <nav>

                    <a className="navbrand"><Link to="/">Logoipsum</Link></a>
                    <a> <Link to="/">Home</Link></a>
                    <a> <Link to="/">Start Helping</Link></a>
                    <a> <Link to="/">About Us</Link></a>


                    <button className="btn1">Contact Us</button>
                </nav>

                <div className="content1">
                    <p className="p1">START HELPING</p>
                    <h1>We provide ways for you to help</h1>
                    <br />
                    <p>There are numerous ways to contribute to your community beyond just <br />donating money or volunteering your time </p>
                </div>

                <div className="row-1">
                    <div className="col-1">
                        <p>Donation</p>
                    </div>
                    <div className="col-1">
                        <p>Volunteer</p>
                    </div>
                    <div className="col-1">
                        <p>Community <br /> Events</p>
                    </div>
                </div>


            </div>


            <div className="info-dts">
                <p style={{ color: "blue" }}>Donation</p>
                <h2>Giving back to the community</h2>
                <p>Giving money,goods, or resource to support causes,organizations, or<br />individual in need</p>
                <br />
                <div className="form-dts">
                    {/* <form onSubmit={}> </form> */}
                    <h4>Let us now about you</h4>
                    <br />
                    <form onSubmit={handleSubmit((data) => {
                        console.log(data)
                    })}>
                        <div className="checklists" {...register('check', { required: "choose your option" })} id="">

                            <div className="col-2">
                                <input type="checkbox" value={ind} onChange={() => handlechange('ind')} /><label style={{ fontWeight: "600" }}>Donate as an individual</label>
                            </div>
                            <div className="col-2">
                                <input type="checkbox" value={org} onChange={() => handlechange('org')} /> <label style={{ fontWeight: "600" }}>Donate as an Organization</label>
                            </div>
                            <div className="col-2">
                                <input type="checkbox" value={ana} onChange={() => handlechange('ana')} /><label style={{ fontWeight: "600" }}>Donate as an Anonymously </label>
                            </div>

                        </div>
                        {errors?.check && <p style={{ color: 'red' }}>{errors.check.message}</p>}

                        <br />
                        <h4>Let's complete your information details</h4>
                        <br />
                        <div className="forms-enter" id="form-1">
                            <input type="checkbox" name="checkbox"

                                checked={checked}
                                onChange={() => {
                                    if (checked) {
                                        setText('')
                                    }
                                    setChecked(!checked)
                                }
                                } /> <label style={{ fontWeight: "600" }}>I wish to have tax deduction</label><br />
                            <p>you are entitled to a tax-deduction of 2.5 times of your donation amount</p>
                            <br />
                            <div className="form-2">
                                {errors?.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                                <input {...register('name', { required: "Enter your name" })} type="text" className="ins" id="name" placeholder="Full Name" />
                                {errors?.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                                <input {...register('email', { required: "Enter your email" })} type="email" className="ins" id="email" placeholder="Email Address" /><br />
                                {/* {errors?.id_type && <p style={{ color: 'red' }}>{errors.id_type.message}</p>} */}
                                <input type="text" className="sm" id="id_type" disabled={!checked}
                                    value={text}
                                    onChange={e => setText(e.target.value)} placeholder="ID Type" />
                                {/* {errors?.tax_id && <p style={{ color: 'red' }}>{errors.tax_id.message}</p>} */}
                                <input type="text" className="md" id="tax_id" disabled={!checked}
                                    value={text}
                                    onChange={e => setText(e.target.value)} placeholder="Tax Reception ID" />
                                {/* {errors?.tax_name && <p style={{ color: 'red' }}>{errors.tax_name.message}</p>} */}
                                <input  type="text" className="ins" id="tax_name" disabled={!checked}
                                    value={text}
                                    onChange={e => setText(e.target.value)} placeholder="Tax Recepient Full Name" /><br />
                                {errors?.post && <p style={{ color: 'red' }}>{errors.post.message}</p>}
                                <input {...register('post', {
                                    required: 'Enter your Postal Code', maxLength: {
                                        value: 6,
                                        message: "Only 6 digit postal code"
                                    }
                                })} type="number" className="ins" id="post" placeholder="Postal Code" />
                                {errors?.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
                                <input {...register('address', { required: 'Enter your Address' })} type="text" className="ins" id="address" placeholder="Address" /><br />
                                {errors?.unit_num && <p style={{ color: 'red' }}>{errors.unit_num.message}</p>}
                                <input {...register('unit_num', { required: 'Enter your Unit Number' })} type="number" className="ins" id="unit_num" placeholder="Unit Number" />

                                <input type="text" className="ins" id="remark" placeholder="Remarks" />

                            </div>
                        </div>

                        <h4>How Much would you like to donate ?</h4>
                        <div className="form-3">
                            <input type="number" step="0.01" style={{ border: "none" }}   {...register('dona', { required: 'pay your valuable amount' })} className="da" placeholder="Donation Amount" />
                            {errors?.dona && <p style={{ color: 'red' }}>{errors.dona.message}</p>}
                            <div className="pay-btn">
                                <button id="" className="btn-2"> Credit Card</button>
                                <button id="" className="btn-2" >PayNow</button>
                            </div>
                            <input type="checkbox" value={term} onChange={() => handlechange('term')} {...register('term', { required: 'Read and accept the terms and conditions' })} id="" /> I agree with the <a href="#" style={{ textDecorationLine: "none" }}>terms and conditions</a>
                            {errors?.term && <p style={{ color: 'red' }}>{errors.term.message}</p>}
                            <br />
                            <button id="" className="btn-3">Donate</button>
                        </div>


                    </form>

                </div>


            </div>



        </>

    );
}

export default Home;