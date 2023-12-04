import { useEffect, useState } from "react";
import CakeModel from "../../models/CakeModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchCake } from "./components/SearchCake";
import { Pagination } from "../Utils/Pagination";

export const SearchCakesPage = () => {
    const [cakes, setCakes] = useState<CakeModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [cakesPerPage, setCakesPerPage] = useState(5);
    const [totalNumberOfCakes, setTotalNumberOfCakes] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchUrl, setSearchUrl] = useState('');
    const [search, setSearch] = useState('');
    const [categorySelection, setCategorySelection] = useState('Cake category');
    const [showSuccessAlert, setshowSuccessAlert] = useState(false);

    useEffect(() => {

        const fetchCakes = async () => {
            const baseUrl: string = "http://localhost:8080/api/cakes";

            let url: string = '';
            console.log(cakes)
            if (searchUrl === '') {
                url = `${baseUrl}?page=${currentPage - 1}&size=${cakesPerPage}`;
            } else {
                let searchWithPage = searchUrl.replace('<pageNumber>', `${currentPage - 1}`)
                url = baseUrl + searchWithPage;
            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded.cakes;

            setTotalNumberOfCakes(responseJson.page.totalElements);
            setTotalPages(responseJson.page.totalPages)

            const loadedCakes: CakeModel[] = [];
            console.log(responseData)
            for (const key in responseData) {
                loadedCakes.push({
                    id: responseData[key]._links.self.href.substring(32),
                    title: responseData[key].title,
                    description: responseData[key].description,
                    occasion: responseData[key].category,
                    numberportions: responseData[key].numberportions,
                    img: responseData[key].img
                })
            }
            console.log(cakes);
            setCakes(loadedCakes);
            setIsLoading(false);
        };
        fetchCakes().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
        window.scrollTo(0, 0);
    }, [currentPage, searchUrl]);

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    const searchHandleChange = () => {
        setCurrentPage(1);
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/search/findByTitleContaining?title=${search}&page=<pageNumber>&size=${cakesPerPage}`)
        }
        setCategorySelection('Cake category');
    }

    const categoryField = (value: string) => {
        setCurrentPage(1)
        if (
            value.toLowerCase() === 'hbd' ||
            value.toLowerCase() === 'eng' ||
            value.toLowerCase() === 'grad' ||
            value.toLowerCase() === 'mom'
        ) {
            setCategorySelection(value);
            setSearchUrl(`/search/findByCategory?category=${value}&page=<pageNumber>&size=${cakesPerPage}`)
        } else {
            setCategorySelection('All');
            setSearchUrl(`?page=<pageNumber>$size=${cakesPerPage}`)
        }
    }

    const indexOfLastCake: number = currentPage * cakesPerPage;
    const indexOfFirstCake: number = indexOfLastCake - cakesPerPage;
    let lastItem = cakesPerPage * currentPage <= totalNumberOfCakes ? cakesPerPage * currentPage : totalNumberOfCakes;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);



    return (
        <div>
            <div className="container">
                <div>
                    {showSuccessAlert &&
                        <div className="alert alert-success w-25 mt-3 ml-3 " role="alert">
                            This is a success alert—check it out!
                        </div>
                    }
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="d-flex">
                                <input id="Search" className="form-control me-2" type="search"
                                    placeholder="Search" aria-labelledby="Search"
                                    onChange={e => setSearch(e.target.value)} />
                                <button className="btn btn-outline-success" onClick={() => searchHandleChange()}>
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {categorySelection}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li onClick={() => categoryField('All')}>
                                        <a className="dropdown-item" href="#">
                                            All
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('HBD')}>
                                        <a className="dropdown-item" href="#">
                                            Compleanno
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('ENG')}>
                                        <a className="dropdown-item" href="#">
                                            Fidanzamento
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('GRAD')}>
                                        <a className="dropdown-item" href="#">
                                            Laurea
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('MOM')}>
                                        <a className="dropdown-item" href="#">
                                            Festa della mamma
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="d-flex">
                                <button className="btn btn-success" onClick={() => searchHandleChange()}>
                                    Add a new cake
                                </button>
                            </div>
                        </div>
                    </div>
                    {totalNumberOfCakes > 0 ?
                        <>
                            <div className="mt-3">
                                <h5>Number of results: ({totalNumberOfCakes})</h5>
                            </div>
                            <p>
                                {indexOfFirstCake + 1} to {lastItem} of {totalNumberOfCakes} items
                            </p>
                            {cakes.map(cake => (
                                <SearchCake cake={cake} key={cake.id} />
                            ))}
                        </>
                        :
                        <div className="m-5">
                            <h3>
                                Can't find what you're looking for?
                            </h3>
                            <a type="button" className="btn main-color btn-md px-4 me-md-2 fw-bold text-white" href="#">
                                Library Services
                            </a>
                        </div>
                    }
                    {totalPages > 1 &&
                        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
                    }
                </div>
            </div>
        </div>
    );
}