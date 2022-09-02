import { Checkbox } from "../../../../ui";
import React from "react";
import { useRouter } from "next/router";

const useQuery = (name) => {
  const router = useRouter();
  const query = router.query;
  const queryValue = query[name] ? query[name].split(",") : [];

  const set = (value) => {
    if (value === "") {
      const { [name]: remove, ...rest } = router.query;
      router.query = rest;
    } else {
      router.query[name] = value;
    }
    router.push(router);
  };

  const add = (value) => {
    const query = router.query[name] || ""; // NOTE: undefined if added first time
    const values = query.split(",").filter(Boolean);
    const newQuery = [...values, value].join(",");
    router.query[name] = newQuery;
    router.push(router);
  };

  const remove = (value) => {
    const query = router.query[name] || ""; // NOTE: undefined if added first time
    const values = query.split(",");
    const newQuery = values.filter((v) => value !== v).join(",");
    if (newQuery === "") {
      const { [name]: r, ...rest } = router.query;
      router.query = rest;
    } else {
      router.query[name] = newQuery;
    }
    router.push(router);
  };

  return [queryValue, { set, add, remove }];
};

const QueryCheckbox = ({ queryKey, value, name, label, id, onChange }) => {
  const [queryValue, { remove, add }] = useQuery(queryKey);
  return (
    <Checkbox
      checked={queryValue?.includes(value)}
      onChange={(e) => {
        const { checked } = e.target;
        if (!checked) {
          remove(value);
        } else {
          add(value);
        }
        onChange?.(e);
      }}
      id={id}
      name={name}
      label={label}
    />
  );
};

export default QueryCheckbox;
