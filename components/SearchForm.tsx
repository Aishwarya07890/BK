'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { formUrlQuery } from '@/sanity/utils';

const SearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const updateSearchParams = () => {
      const currentParams = searchParams?.toString() || '';
      const newUrl = search
        ? formUrlQuery({ params: currentParams, key: 'query', value: search })
        : formUrlQuery({ params: currentParams, keysToRemove: ['query'] });

      router.push(newUrl, { scroll: false });
    };

    const debounce = setTimeout(updateSearchParams, 300);
    return () => clearTimeout(debounce);
  }, [search, searchParams, router]);

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          alt="Search icon"
          className="absolute left-8"
          width={32}
          height={32}
        />
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
        />
      </label>
    </form>
  );
};

export default SearchForm;
