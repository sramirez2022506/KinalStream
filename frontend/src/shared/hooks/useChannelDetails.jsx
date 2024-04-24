import { useState } from "react";
import toast from "react-hot-toast";
import { getChannelsDetails as getChannelDetailsRequest } from "../../services/api";

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState();

    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetailsRequest(id)

        if (responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'Error trying to load the channel'
            )
        }

        setChannelDetails(responseData)
    }

    return {
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails
    }
}