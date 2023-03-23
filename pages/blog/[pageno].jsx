import { useRouter } from "next/router";

const Pageno = () => {

    const router = useRouter();
    const pageNumber = router.query.pageno;

    return (
        <>
            <h1>my blog {pageNumber}</h1>
        </>
    )
}

export default Pageno;
