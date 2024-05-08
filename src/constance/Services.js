import BuildSvg from "@/app/components/Icons/BuildSvg";
import Checked from "@/app/components/Icons/Checked";
import DesignSvg from "@/app/components/Icons/DesignSvg";
import EyeSvg from "@/app/components/Icons/EyeSvg";
import ListSvg from "@/app/components/Icons/ListSvg";

export let services = [
    {
        id: 1,
        title: 'برنامه ریزی',
        text: 'برنامه ریزی برای انجام نحوه پروژه',
        svg: <ListSvg />
    },
    {
        id: 2,
        title: 'طراحی مدرن',
        text: 'طراحی مدرن شیک مطابق مد روز و جهان',
        svg: <DesignSvg />
    },
    {
        id: 3,
        title: 'ساخت و ساز',
        text: 'برنامه ریزی برای انجام نحوه پروژه',
        svg: <BuildSvg />
    },
    {
        id: 4,
        title: 'نظارت برکار',
        text: 'برنامه ریزی برای انجام نحوه پروژه',
        svg: <EyeSvg />
    },
    {
        id: 5,
        title: 'اتمام پروژه',
        text: 'برنامه ریزی برای انجام نحوه پروژه',
        svg: <Checked />
    },
]