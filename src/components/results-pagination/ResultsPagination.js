import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ResponsivePagination from 'react-responsive-pagination';
import { dropEllipsis, dropFirstAndLast, combine } from 'react-responsive-pagination/narrowBehaviour'

export default function ResultsPagination(props) {
    const numOfPages = Math.ceil(props.numberOfResults / 12);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = searchParams.get('page');

    function handlePageChange(page) {
        setSearchParams(prev => ({
            'search': prev.get('search'),
            'veganFriendly': prev.get('veganFriendly'),
            'page': page
        }))
    }

    return (
        <ResponsivePagination
            total={numOfPages}
            current={+currentPage}
            onPageChange={page => handlePageChange(page)}
            narrowBehaviour={combine(dropEllipsis, dropFirstAndLast)}
            maxWidth={320}
            previousLabel='‹' nextLabel='›'
        />
    );
}
