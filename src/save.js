import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import {LogoGrid} from "./logoGrid";

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { logos, columns } = attributes;

	return (
		<div { ...blockProps }>
			<LogoGrid logos={ logos } columns={String(columns)}/>
		</div>
	);
}
