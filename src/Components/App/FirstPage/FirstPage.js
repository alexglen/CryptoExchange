import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../redux/actions";
import Currencies from "./Currencies/Currencies";
import Loader from "../Loader";

const FirstPage = () => {
	const { loading, data } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	if (loading) return <Loader />;

	return (
		<div>
			<Currencies courses={data} />
		</div>
	);
};

export default FirstPage;
