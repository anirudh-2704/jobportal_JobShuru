import { useEffect } from 'react'
import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    // const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminJobs();
    },[])
}

export default useGetAllAdminJobs