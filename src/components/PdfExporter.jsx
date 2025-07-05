import { PDFDownloadLink, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40 },
  title: { fontSize: 24, marginBottom: 10 },
  image: { width: '100%', height: 300, objectFit: 'cover', marginBottom: 10 },
  desc: { marginBottom: 10 },
  dialogue: { fontStyle: 'italic' }
});

function PdfDoc({ scenes }) {
  return (
    <Document>
      {scenes.map((scene) => (
        <Page key={scene.id} size="A4" style={styles.page}>
          <Text style={styles.title}>{scene.title}</Text>
          {scene.image && <Image src={scene.image} style={styles.image} />}
          <Text style={styles.desc}>{scene.description}</Text>
          <Text style={styles.dialogue}>{scene.dialogue}</Text>
        </Page>
      ))}
    </Document>
  );
}

function PdfExporter({ scenes }) {
  return (
    <PDFDownloadLink
      document={<PdfDoc scenes={scenes} />}
      fileName="storyboard.pdf"

      className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white px-4 py-2 rounded-md mt-4"

    >
      {({ loading }) => (loading ? 'Preparing document...' : 'Export to PDF')}
    </PDFDownloadLink>
  );
}

export default PdfExporter;
