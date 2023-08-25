import React from 'react';
import PlusIcon from '../../assets/images/icons/plus.svg';
import DefaultIcon from '../../assets/images/avatar/default_avatar.png'
function ApplyForm(props) {

    const category_list = [
        'Blockchain',
        'Community',
        'Content',
        'DAO',
        'DeFi',
        'Gaming',
        'Marketplace',
        'NFT',
        'Security',
        'Tool',
        'Wallet',
        'Other'
    ]

    const blockchain_list = [
        "BTC",
        "Ethereum",
        "Solana",
        "Polygon",
        "Avalanche",
        "Arbitrum",
        "Optimism",
        "Cardano",
        "BNB",
        "Multi-Chain",
        "Other"
    ]

    const publication_date_list = [
        "Anytime",
        "September 4, 2023",
        "September 11, 2023",
        "September 18, 2023",
        "October 2, 2023",
        "October 9, 2023"
    ]
    return (
        <div id='ApplyForm'>
            <form action="">
                <ul>
                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="link" className="font-bold flex items-center [&>svg]:mr-2">
                                    Link to your product*
                                </label>
                            </div>
                            <p className="text-sm text-foreground-onEmphasis mt-1">
                                This link should open your product website.
                            </p>

                        </div>
                        <input type="link" placeholder='https://link-to-website.com' required name='link' id='link' className="input" />
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            Link is required
                        </div>
                    </li>
                    {/* form list End*/}

                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="name" className="font-bold flex items-center [&>svg]:mr-2">
                                    Name of your product*
                                </label>
                                <div className="text-sm text-foreground-onEmphasis">
                                    0 / 40
                                </div>
                            </div>
                        </div>
                        <input type="text" placeholder='E.g. Smoothie' required name='name' id='NAME' className="input" />
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            Name is required
                        </div>
                    </li>
                    {/* form list End*/}

                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="category" className="font-bold flex items-center [&>svg]:mr-2">
                                    Category*
                                </label>
                            </div>

                        </div>
                        <select name="category" id="category" className="input">
                            <option value="disabled" disabled> Select a category for your product </option>
                            {category_list.map((value, id) => {
                                return <option key={id} value={value}> {value} </option>
                            })}
                        </select>
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis"></div>
                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Blockchain" className="font-bold flex items-center [&>svg]:mr-2">
                                    Blockchain
                                </label>
                            </div>
                        </div>
                        <select name="Blockchain" id="Blockchain" className="input">
                            <option value="" disabled> Select the Blockchain for your product </option>
                            {blockchain_list.map((value, id) => {
                                return <option key={id} value={value}> {value} </option>
                            })}
                        </select>
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis"></div>

                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="smart_contract" className="font-bold flex items-center [&>svg]:mr-2">
                                    Product smart contract
                                </label>
                            </div>

                        </div>

                        {/*  */}
                        <button type='button' className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground hover:brightness-95 border border-border-interactive font-semibold p-3 w-full">
                            <span className="flex-center h-[18px] w-[18px] ">
                                <img src={PlusIcon} alt="plus" />
                            </span>
                            <span className="px-3">Add Contract</span>
                        </button>
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis"></div>

                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Tagline" className="font-bold flex items-center [&>svg]:mr-2">
                                    Tagline*
                                </label>
                                <div className="text-sm text-foreground-onEmphasis">
                                    0 / 60
                                </div>
                            </div>
                            <p className="text-sm text-foreground-onEmphasis mt-1">
                                A concise description of your app
                            </p>
                        </div>
                        <input type="text" placeholder='E.g. App Store for Web3' required name='Tagline' id='Tagline' className="input" />
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            {/* Tagline is required */}
                        </div>
                    </li>
                    {/* form list End*/}



                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Description" className="font-bold flex items-center [&>svg]:mr-2">
                                    Description*
                                </label>
                                <div className="text-sm text-foreground-onEmphasis">
                                    0 / 2000
                                </div>
                            </div>
                        </div>
                        <textarea name="Description" id="Description" className="input h-[144px]" placeholder='Description of your product...'></textarea>
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            {/* Description is required */}
                        </div>
                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Description" className="font-bold flex items-center [&>svg]:mr-2">
                                    Product icon*
                                </label>
                            </div>
                        </div>

                        <label htmlFor='product_icon' className="flex flex-center rounded-xl border border-dashed transition flex-col w-[184px] h-[184px] relative overflow-hidden hover:border-border-interactive-hover cursor-pointer border-border-interactive">
                            <input type="file" name="product_icon" id="product_icon" className='hidden' />

                            <div className="rounded-md w-10 h-10 bg-gradient-to-br from-red-900 via-pink-500 to-purple-500 mb-4">

                            </div>

                            <button type="button" className="flex items-center w-fit transition leading-[20px] py-2 rounded-[32px] text-base border bg-white text-foreground pl-3 pr-3 !font-medium !transition hover:!border-border-interactive-hover">
                                <span>Select image</span>
                            </button>

                            <p className="text-center mt-2 text-[13px] text-foreground-onEmphasis">
                                JPEG or PNG, <br />240x240 or higher
                            </p>
                        </label>
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">

                        </div>
                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Description" className="font-bold flex items-center [&>svg]:mr-2">
                                    Preview images*
                                </label>
                                <div className="text-sm text-foreground-onEmphasis">
                                    0 / 12
                                </div>
                            </div>
                        </div>

                        <label htmlFor='preview_image' className="flex items-center rounded-xl border border-dashed flex-col w-full h-[347px] cursor-pointer transition relative select-none justify-end hover:border-border-interactive-hover border-border-interactive">
                            <input type="file" name="preview_image" id="preview_image" className='hidden' />

                            <div className="flex mb-4 space-x-1 mt-24">
                                <div className="mt-2 rounded-md w-16 h-12 bg-gradient-to-br from-red-900 via-pink-500 to-purple-500"></div>
                                <div className="rounded-md w-16 h-12 bg-gradient-to-b from-purple-400 to-green-400"></div>
                                <div className="mt-4 rounded-md w-16 h-12 bg-gradient-to-br from-cyan-400 via-cyan-300 to-green-400"></div>
                            </div>

                            <button type="button" className="flex items-center w-fit transition leading-[20px] py-2 rounded-[32px] text-base border bg-white text-foreground pl-3 pr-3 !font-medium !transition hover:!border-border-interactive-hover">
                                <span>Select image(s)</span>
                            </button>

                            <div className="w-full p-4 text-[13px]">
                                <h6 className="font-semibold">
                                    Recommendations:
                                </h6>
                                <p className="mt-2 text-foreground-onEmphasis">
                                    Make your images 1128 by 752 pixels (3:2 ratio)<br />Upload images up to 10MB<br />Use JPG or PNG file format
                                </p>
                            </div>
                        </label>
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">

                        </div>
                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="yt_url" className="font-bold flex items-center [&>svg]:mr-2">
                                    YouTube video URL
                                </label>
                            </div>
                            <p className="text-sm text-foreground-onEmphasis mt-1">
                                Add a Youtube video URL. If you do, it will be the first item in your product gallery.
                            </p>

                        </div>
                        <input type="url" placeholder='https://www.youtube.com/embed/93w4w9WgXcx' required name='yt_url' id='yt_url' className="input" />
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            {/* Link is required */}
                        </div>
                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="yt_url" className="font-bold flex items-center [&>svg]:mr-2">
                                    Team*
                                </label>
                            </div>
                            <p className="text-sm text-foreground-onEmphasis mt-1">
                                List people who contributed to building the product.
                            </p>

                        </div>

                        <div className="flex items-center flex-wrap gap-3">
                            <div className="flex items-center w-fit transition leading-[20px] py-2 rounded-[32px] text-base border bg-white text-foreground pl-3 pr-3 !pl-2 !py-1.5 !pr-4 !font-medium">
                                <div className="flex-center">
                                    <div className="relative inline-block min-w-fit rounded-full overflow-hidden w-8 h-8 mr-2">
                                        <img src={DefaultIcon} alt="avatar" className="w-8 h-8 object-cover" />
                                    </div>
                                    Username
                                </div>
                            </div>
                            <button type="button" className="flex-center text-b1 rounded-[32px] w-[95px] h-[46px] font-medium border border-accent-emphasis transition-colors">
                                + Add
                            </button>
                        </div>

                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            {/* twitter_handle is required */}
                        </div>
                    </li>
                    {/* form list End*/}



                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="nominated_field" className="font-bold flex items-center [&>svg]:mr-2">
                                    Were you nominated?
                                </label>
                            </div>
                            <p className="text-sm text-foreground-onEmphasis mt-1">
                                Did anyone nominate you to participate on Smoothie Awards?
                            </p>

                        </div>

                        <div className="flex items-center flex-wrap gap-3">
                            <button type="button" className="flex-center text-b1 rounded-[32px] w-[95px] h-[46px] font-medium border border-accent-emphasis transition-colors">
                                + Add
                            </button>
                        </div>

                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            {/*  is required */}
                        </div>
                    </li>
                    {/* form list End*/}





                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="twitter_handle" className="font-bold flex items-center [&>svg]:mr-2">
                                    Product twitter handle
                                </label>
                            </div>
                        </div>
                        <input type="text" placeholder='@handle' required name='twitter_handle' id='twitter_handle' className="input" />
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            {/* twitter_handle is required */}
                        </div>
                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="publication_date" className="font-bold flex items-center [&>svg]:mr-2">
                                    Preferred publication date
                                </label>
                            </div>
                            <p className="text-sm text-foreground-onEmphasis mt-1">
                                Smoothie Awards take place every week. Let us know which week you prefer to launch your product (this is dependent on our team’s review).
                            </p>

                        </div>


                        <select name="publication_date" id="publication_date" className="input">
                            {publication_date_list.map((value, id) => {
                                return <option key={id} value={value}> {value} </option>
                            })}
                        </select>
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis"></div>


                    </li>
                    {/* form list End*/}



                    {/* form list */}
                    <li>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="email_address" className="font-bold flex items-center [&>svg]:mr-2">
                                    Your work email address*
                                </label>
                            </div>
                            <p className="text-sm text-foreground-onEmphasis mt-1">
                                We need your work email to verify that you’re from the product team. This won’t be public.
                            </p>
                        </div>
                        <input type="email" placeholder='Email' required name='email_address' id='email_address' className="input" />
                        <div className="min-h-[36px] pt-2 text-sm text-danger-emphasis">
                            {/* twitter_handle is required */}
                        </div>
                    </li>
                    {/* form list End*/}


                    {/* form list */}
                    <li>
                        {/* submit handling form action */}

                        <div className="flex sticky bottom-4 z-20">
                            <button type="button" className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-white text-foreground hover:brightness-95 border border-border-interactive font-semibold p-3 mr-1">
                                <span className="px-3">Save draft</span>
                            </button>

                            <button type="submit" className="flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white hover:brightness-95 border border-white font-semibold p-3 !justify-self-end grow !font-medium">
                                <span className="px-3">Submit for review</span>
                            </button>
                        </div>
                        {/* submit handling form action End */}
                    </li>
                    {/* form list End*/}


                </ul>
            </form>
        </div>
    );
}

export default ApplyForm;