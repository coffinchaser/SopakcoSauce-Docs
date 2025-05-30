import type { DocumentBlockHeading } from '@gitbook/api';
import { Icon } from '@gitbook/icons';

import { tcls } from '@/lib/tailwind';

import type { BlockProps } from './Block';
import { Inlines } from './Inlines';
import { getBlockTextStyle } from './spacing';

export function Heading(props: BlockProps<DocumentBlockHeading>) {
    const { block, style, context, ...rest } = props;

    const textStyle = getBlockTextStyle(block);

    const Tag = TAGS[block.type];

    let id = block.meta?.id ?? '';
    id = context.getId ? context.getId(id) : id;

    return (
        <Tag
            id={id}
            className={tcls(
                textStyle.textSize,
                'heading',
                'group',
                'relative',
                'grid',
                'scroll-m-12',
                style
            )}
        >
            <div
                className={tcls(
                    'hash',
                    'grid',
                    'grid-area-1-1',
                    'relative',
                    '-ml-6',
                    'w-7',
                    'border-0',
                    'opacity-0',
                    'group-hover:opacity-[0]',
                    'group-focus:opacity-[0]',
                    'md:group-hover:md:opacity-[1]',
                    'md:group-focus:md:opacity-[1]',
                    textStyle.marginTop
                )}
            >
                <a
                    href={`#${id}`}
                    aria-label="Direct link to heading"
                    className={tcls('inline-flex', 'h-full', 'items-start', textStyle.lineHeight)}
                >
                    <Icon
                        icon="hashtag"
                        className={tcls(
                            'w-3.5',
                            'h-[1em]',
                            'mt-0.5',
                            'transition-colors',
                            'text-transparent',
                            'group-hover:text-tint-subtle',
                            'contrast-more:group-hover:text-tint-strong',
                            'lg:w-4'
                        )}
                    />
                </a>
            </div>
            <div
                className={tcls(
                    'grid-area-1-1',
                    'z-[1]',
                    'justify-self-start',
                    'text-left',
                    textStyle.lineHeight,
                    textStyle.marginTop
                )}
            >
                <Inlines {...rest} context={context} nodes={block.nodes} ancestorInlines={[]} />
            </div>
        </Tag>
    );
}

const TAGS: { [type in DocumentBlockHeading['type']]: React.ElementType } = {
    // The h1 is reserved for the page title
    'heading-1': 'h2',
    'heading-2': 'h3',
    'heading-3': 'h4',
};
