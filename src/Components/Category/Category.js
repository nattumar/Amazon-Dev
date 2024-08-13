import React from "react";
import { CategoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from './Category.module.css'

function Category() {
  return (
    <section className={classes.Category_container}>
      {CategoryInfos.map((infos) => {
        return <CategoryCard data={infos} />;
      })}
    </section>
  );
};

export default Category;