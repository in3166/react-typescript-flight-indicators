import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizonBall = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        viewBox="0 0 400.667 400.666"
        {...props}
    >
        <filter id="horizon_ball_svg__a" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation={5} />
            <feOffset in="blur" result="offsetBlurredAlpha" />
            <feMerge>
                <feMergeNode in="offsetBlurredAlpha" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <g filter="url(#horizon_ball_svg__a)">
            <linearGradient
                id="horizon_ball_svg__b"
                x1={200.333}
                x2={200.333}
                y1={276.332}
                y2={124.332}
                gradientUnits="userSpaceOnUse"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#3d2618",
                    }}
                />
                <stop
                    offset={0.5}
                    style={{
                        stopColor: "#503723",
                    }}
                />
                <stop
                    offset={0.5}
                    style={{
                        stopColor: "#9ccbe5",
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#558ebb",
                    }}
                />
            </linearGradient>
            <path
                fill="url(#horizon_ball_svg__b)"
                d="M301.333 200.333c0 41.936-33.963 75.938-75.885 76h-50.114c-41.974 0-76-34.026-76-76s34.026-76 76-76h50.083c41.935.044 75.916 34.054 75.916 76z"
            />
        </g>
        <path
            fill="none"
            stroke="#FFF"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M99.667 200.457h202M187.979 187.374h25M188.167 213.499h25M188.026 241.42h25M188.167 159.374h25M180.042 173.405h40M180.042 227.499h40M170.042 255.332h60M170.042 145.333h60"
        />
        <g fill="#FFF">
            <path d="M166.644 169.224h2.25v7.901h-1.493v-6.488h-1.627l.87-1.413zM172.84 169.025c.577 0 1.073.142 1.491.424.417.283.739.715.967 1.297.227.582.341 1.392.341 2.43 0 1.049-.115 1.866-.347 2.449-.23.583-.542 1.012-.932 1.287-.39.273-.883.411-1.477.411s-1.094-.138-1.499-.414-.722-.695-.951-1.257-.344-1.362-.344-2.401c0-1.45.224-2.501.671-3.153.499-.715 1.192-1.073 2.08-1.073zm.035 1.429c-.253 0-.479.082-.675.244-.196.163-.347.443-.45.841s-.155.979-.155 1.746c0 .999.119 1.689.356 2.071.238.381.546.572.924.572.365 0 .654-.181.869-.542.261-.437.391-1.167.391-2.191 0-1.039-.117-1.754-.351-2.148s-.537-.593-.909-.593z" />
        </g>
        <g fill="#FFF">
            <path d="M155.584 143.883h-1.466c.04-.852.307-1.523.803-2.011.496-.489 1.133-.733 1.91-.733.48 0 .903.101 1.27.304.367.202.661.494.881.875.221.382.331.769.331 1.163 0 .469-.133.974-.4 1.515s-.755 1.18-1.464 1.917l-.887.935h2.816v1.391h-5.473v-.72l2.444-2.492c.591-.598.984-1.079 1.179-1.442.195-.363.292-.692.292-.985 0-.304-.101-.556-.303-.755-.203-.198-.463-.298-.782-.298-.322 0-.591.12-.806.36s-.33.564-.345.976zM162.884 141.138c.577 0 1.073.142 1.491.424.417.283.739.715.967 1.297.227.582.341 1.392.341 2.43 0 1.049-.115 1.866-.347 2.449-.23.583-.542 1.012-.932 1.287-.39.273-.883.411-1.477.411s-1.094-.138-1.499-.414-.722-.695-.951-1.257-.344-1.362-.344-2.401c0-1.45.224-2.501.671-3.153.499-.715 1.192-1.073 2.08-1.073zm.034 1.429c-.253 0-.479.082-.675.244-.196.163-.347.443-.45.841s-.155.979-.155 1.746c0 .999.119 1.689.356 2.071.238.381.546.572.924.572.365 0 .654-.181.869-.542.261-.437.391-1.167.391-2.191 0-1.039-.117-1.754-.351-2.148s-.536-.593-.909-.593z" />
        </g>
        <g fill="#FFF">
            <path d="M234.958 143.784h-1.466c.04-.852.307-1.523.803-2.011.496-.489 1.133-.733 1.91-.733.48 0 .903.101 1.27.304.367.202.661.494.881.875.221.382.331.769.331 1.163 0 .469-.133.974-.4 1.515s-.755 1.18-1.464 1.917l-.887.935h2.816v1.391h-5.473v-.72l2.444-2.492c.591-.598.984-1.079 1.179-1.442.195-.363.292-.692.292-.985 0-.304-.101-.556-.303-.755-.203-.198-.463-.298-.782-.298-.322 0-.591.12-.806.36s-.33.564-.345.976zM242.258 141.039c.577 0 1.073.142 1.491.424.417.283.739.715.967 1.297.227.582.341 1.392.341 2.43 0 1.049-.115 1.866-.347 2.449-.23.583-.542 1.012-.932 1.287-.39.273-.883.411-1.477.411s-1.094-.138-1.499-.414-.722-.695-.951-1.257-.344-1.362-.344-2.401c0-1.45.224-2.501.671-3.153.499-.715 1.192-1.073 2.08-1.073zm.034 1.429c-.253 0-.479.082-.675.244-.196.163-.347.443-.45.841s-.155.979-.155 1.746c0 .999.119 1.689.356 2.071.238.381.546.572.924.572.365 0 .654-.181.869-.542.261-.437.391-1.167.391-2.191 0-1.039-.117-1.754-.351-2.148s-.536-.593-.909-.593z" />
        </g>
        <g fill="#FFF">
            <path d="M224.341 169.224h2.25v7.901h-1.493v-6.488h-1.627l.87-1.413zM230.538 169.025c.577 0 1.073.142 1.491.424.417.283.739.715.967 1.297.227.582.341 1.392.341 2.43 0 1.049-.115 1.866-.347 2.449-.23.583-.542 1.012-.932 1.287-.39.273-.883.411-1.477.411s-1.094-.138-1.499-.414-.722-.695-.951-1.257-.344-1.362-.344-2.401c0-1.45.224-2.501.671-3.153.499-.715 1.191-1.073 2.08-1.073zm.034 1.429c-.253 0-.479.082-.675.244-.196.163-.347.443-.45.841s-.155.979-.155 1.746c0 .999.119 1.689.356 2.071.238.381.546.572.924.572.365 0 .654-.181.869-.542.261-.437.391-1.167.391-2.191 0-1.039-.117-1.754-.351-2.148s-.537-.593-.909-.593z" />
        </g>
        <g fill="#FFF">
            <path d="M166.644 223.224h2.25v7.901h-1.493v-6.488h-1.627l.87-1.413zM172.84 223.025c.577 0 1.073.142 1.491.424.417.283.739.715.967 1.297.227.582.341 1.392.341 2.43 0 1.049-.115 1.866-.347 2.449-.23.583-.542 1.012-.932 1.287-.39.273-.883.411-1.477.411s-1.094-.138-1.499-.414-.722-.695-.951-1.257-.344-1.362-.344-2.401c0-1.45.224-2.501.671-3.153.499-.715 1.192-1.073 2.08-1.073zm.035 1.429c-.253 0-.479.082-.675.244-.196.163-.347.443-.45.841s-.155.979-.155 1.746c0 .999.119 1.689.356 2.071.238.381.546.572.924.572.365 0 .654-.181.869-.542.261-.437.391-1.167.391-2.191 0-1.039-.117-1.754-.351-2.148s-.537-.593-.909-.593z" />
        </g>
        <g fill="#FFF">
            <path d="M224.341 223.224h2.25v7.901h-1.493v-6.488h-1.627l.87-1.413zM230.538 223.025c.577 0 1.073.142 1.491.424.417.283.739.715.967 1.297.227.582.341 1.392.341 2.43 0 1.049-.115 1.866-.347 2.449-.23.583-.542 1.012-.932 1.287-.39.273-.883.411-1.477.411s-1.094-.138-1.499-.414-.722-.695-.951-1.257-.344-1.362-.344-2.401c0-1.45.224-2.501.671-3.153.499-.715 1.191-1.073 2.08-1.073zm.034 1.429c-.253 0-.479.082-.675.244-.196.163-.347.443-.45.841s-.155.979-.155 1.746c0 .999.119 1.689.356 2.071.238.381.546.572.924.572.365 0 .654-.181.869-.542.261-.437.391-1.167.391-2.191 0-1.039-.117-1.754-.351-2.148s-.537-.593-.909-.593z" />
        </g>
        <g fill="#FFF">
            <path d="M155.584 253.883h-1.466c.04-.852.307-1.523.803-2.011.496-.489 1.133-.733 1.91-.733.48 0 .903.101 1.27.304.367.202.661.494.881.875.221.382.331.769.331 1.163 0 .469-.133.974-.4 1.515s-.755 1.18-1.464 1.917l-.887.935h2.816v1.391h-5.473v-.72l2.444-2.492c.591-.598.984-1.079 1.179-1.442.195-.363.292-.692.292-.985 0-.304-.101-.556-.303-.755-.203-.198-.463-.298-.782-.298-.322 0-.591.12-.806.36s-.33.564-.345.976zM162.884 251.138c.577 0 1.073.142 1.491.424.417.283.739.715.967 1.297.227.582.341 1.392.341 2.43 0 1.049-.115 1.866-.347 2.449-.23.583-.542 1.012-.932 1.287-.39.273-.883.411-1.477.411s-1.094-.138-1.499-.414-.722-.695-.951-1.257-.344-1.362-.344-2.401c0-1.45.224-2.501.671-3.153.499-.715 1.192-1.073 2.08-1.073zm.034 1.429c-.253 0-.479.082-.675.244-.196.163-.347.443-.45.841s-.155.979-.155 1.746c0 .999.119 1.689.356 2.071.238.381.546.572.924.572.365 0 .654-.181.869-.542.261-.437.391-1.167.391-2.191 0-1.039-.117-1.754-.351-2.148s-.536-.593-.909-.593z" />
        </g>
        <g fill="#FFF">
            <path d="M234.958 253.784h-1.466c.04-.852.307-1.523.803-2.011.496-.489 1.133-.733 1.91-.733.48 0 .903.101 1.27.304.367.202.661.494.881.875.221.382.331.769.331 1.163 0 .469-.133.974-.4 1.515s-.755 1.18-1.464 1.917l-.887.935h2.816v1.391h-5.473v-.72l2.444-2.492c.591-.598.984-1.079 1.179-1.442.195-.363.292-.692.292-.985 0-.304-.101-.556-.303-.755-.203-.198-.463-.298-.782-.298-.322 0-.591.12-.806.36s-.33.564-.345.976zM242.258 251.039c.577 0 1.073.142 1.491.424.417.283.739.715.967 1.297.227.582.341 1.392.341 2.43 0 1.049-.115 1.866-.347 2.449-.23.583-.542 1.012-.932 1.287-.39.273-.883.411-1.477.411s-1.094-.138-1.499-.414-.722-.695-.951-1.257-.344-1.362-.344-2.401c0-1.45.224-2.501.671-3.153.499-.715 1.192-1.073 2.08-1.073zm.034 1.429c-.253 0-.479.082-.675.244-.196.163-.347.443-.45.841s-.155.979-.155 1.746c0 .999.119 1.689.356 2.071.238.381.546.572.924.572.365 0 .654-.181.869-.542.261-.437.391-1.167.391-2.191 0-1.039-.117-1.754-.351-2.148s-.536-.593-.909-.593z" />
        </g>
    </svg>
);
export default SvgHorizonBall;
