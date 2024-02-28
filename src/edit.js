import { MediaUpload, MediaUploadCheck, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { LogoGrid } from './LogoGrid';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { logos } = attributes;
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
				</PanelBody>
			</InspectorControls>
			<LogoGrid logos={ logos } />
			<InnerBlocks />
		</div>
	);
}
