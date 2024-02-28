import { MediaUpload, MediaUploadCheck, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { LogoGrid } from './LogoGrid';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { logos, columns } = attributes;
	const blockProps = useBlockProps();

	const onSelectLogos = ( newLogos ) => {
		setAttributes( { logos: newLogos } );
	};

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title="Logo Grid Settings">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectLogos }
							allowedTypes={ ['image'] }
							multiple
							gallery
							value={ logos.map( logo => logo.id ) }
							render={ ({ open }) => (
								<Button className="upload-btn" onClick={ open }>
									Upload Logos
								</Button>
							) }
						/>
					</MediaUploadCheck>
					<RangeControl
						label="Number of columns"
						value={ columns }
						onChange={ ( newColumns ) => setAttributes( { columns: newColumns } ) }
						min={ 1 }
						max={ 4 }
						defaultValue={ 3 }
					/>
				</PanelBody>
			</InspectorControls>
			<LogoGrid key={1} logos={ logos } columns={columns}/>
			<InnerBlocks />
		</div>
	);
}
